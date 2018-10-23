package com.run.crmresearch.utils;

import com.sun.org.apache.xml.internal.security.utils.Base64;
import com.sun.xml.internal.messaging.saaj.util.ByteInputStream;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/10 11:52
 * @Version 1.0
 **/
public class Base64ToIdentifyCodeUtil {

    private static Map<BufferedImage, String> trainMap = null;
    private static int index = 0;
    private static final String dirPath = "E:\\temp\\";


    public static String getTextByBase64(String base64Text) throws Exception {
        byte[] decode = Base64.decode(base64Text);
        BufferedImage read = ImageIO.read(new ByteInputStream(decode, decode.length));
        return getTextByBufferedImage(read);
    }

    private static String getTextByBufferedImage(BufferedImage read) throws Exception {

        //二值化、去噪
        BufferedImage img = removeBackgroud(read);
        //分割图片
        List<BufferedImage> listImg = splitImage(img);
        //加载训练集图库
        Map<BufferedImage, String> map = loadTrainData();

        StringBuilder result = new StringBuilder();
        //循环匹配单个图片
        for (BufferedImage bi : listImg) {
            result.append(getSingleCharOcr(bi, map));
        }

        return result.toString();
    }

    private static BufferedImage removeBackgroud(BufferedImage img) throws Exception {
        int width = img.getWidth();
        int height = img.getHeight();

        double Wr = 0.299;
        double Wg = 0.587;
        double Wb = 0.114;

        int[][] gray = new int[width][height];

        //灰度化
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                Color color = new Color(img.getRGB(x, y));
                int rgb = (int) ((color.getRed() * Wr + color.getGreen() * Wg + color.getBlue() * Wb) / 3);
                gray[x][y] = rgb;
            }
        }
        int ostu = getOstu(gray, width, height);

        for (int x = 0; x < width; ++x) {
            for (int y = 0; y < height; ++y) {

                if (gray[x][y] > ostu) {
                    img.setRGB(x, y, Color.white.getRGB());
                } else {
                    img.setRGB(x, y, Color.black.getRGB());
                }

            }
        }
        //去噪
        for (int x = 0; x < width; ++x) {
            for (int y = 0; y < height; ++y) {
                if (isBlack(img.getRGB(x, y))) {
                    if (isAlone(img, x, y,width,height)) {
                        img.setRGB(x, y, Color.WHITE.getRGB());
                    }
                }
            }
        }
        return img;
    }

    private static boolean isAlone(BufferedImage img, int x, int y,int width,int height) {

        if (x == 0 || width - x < 3 || y == 0 || height - y < 3) {
            return true;
        }
        try {
            int a1 = img.getRGB(x - 1, y + 1);
            int a2 = img.getRGB(x - 1, y);
            int a3 = img.getRGB(x - 1, y - 1);
            int a4 = img.getRGB(x, y + 1);
            int a5 = img.getRGB(x, y - 1);
            int a6 = img.getRGB(x + 1, y + 1);
            int a7 = img.getRGB(x + 1, y);
            int a8 = img.getRGB(x + 1, y - 1);

            ArrayList<Boolean> booleans = new ArrayList<Boolean>();

            booleans.add(isBlack(a1));
            booleans.add(isBlack(a2));
            booleans.add(isBlack(a3));
            booleans.add(isBlack(a4));
            booleans.add(isBlack(a5));
            booleans.add(isBlack(a6));
            booleans.add(isBlack(a7));
            booleans.add(isBlack(a8));

            long count = booleans.stream().filter((a) -> a).count();

            if (count <= 1) {
                return true;
            }
        } catch (Exception e) {
            return false;
        }
        return false;

    }

    private static List<BufferedImage> splitImage(BufferedImage img) throws Exception {
        List<BufferedImage> subImgs = new ArrayList<>();
        int width = img.getWidth();
        int height = img.getHeight();
        List<Integer> weightlist = new ArrayList<>();
        for (int x = 0; x < width; ++x) {
            int count = 0;
            for (int y = 0; y < height; ++y) {
                if (isBlack(img.getRGB(x, y))) {
                    count++;
                }
            }
            weightlist.add(count);
        }
        for (int i = 0; i < weightlist.size(); i++) {
            int length = 0;
            while (i < weightlist.size() && weightlist.get(i) > 0) {
                i++;
                length++;
            }
            if (length > 2) {
                subImgs.add(removeBlank(img.getSubimage(i - length, 0, length, height)));
            }
        }
        return subImgs;
    }

    private static boolean isBlack(int colorInt) {
        Color color = new Color(colorInt);
        return color.getRed() + color.getGreen() + color.getBlue() <= 100;
    }

    private static BufferedImage removeBlank(BufferedImage img) throws Exception {
        int width = img.getWidth();
        int height = img.getHeight();
        int start = 0;
        int end = 0;
        Label1:
        for (int y = 0; y < height; ++y) {
            for (int x = 0; x < width; ++x) {
                if (isBlack(img.getRGB(x, y))) {
                    start = y;
                    break Label1;
                }
            }
        }
        Label2:
        for (int y = height - 1; y >= 0; --y) {
            for (int x = 0; x < width; ++x) {
                if (isBlack(img.getRGB(x, y))) {
                    end = y;
                    break Label2;
                }
            }
        }
        return img.getSubimage(0, start, width, end - start + 1);
    }

    private static Map<BufferedImage, String> loadTrainData() throws Exception {
        if (trainMap == null) {
            Map<BufferedImage, String> map = new HashMap<>();
            File dir = new File(dirPath + "train");
            File[] files = dir.listFiles();
            for (File file : files) {
                map.put(ImageIO.read(file), file.getName().charAt(0) + "");
            }
            trainMap = map;
        }
        return trainMap;
    }

    private static String getSingleCharOcr(BufferedImage img,
                                           Map<BufferedImage, String> map) {
        String result = "#";
        int width = img.getWidth();
        int height = img.getHeight();
        int min = width * height;
        for (BufferedImage bi : map.keySet()) {
            int count = 0;
            if (Math.abs(bi.getWidth() - width) > 2)
                continue;
            int widthmin = width < bi.getWidth() ? width : bi.getWidth();
            int heightmin = height < bi.getHeight() ? height : bi.getHeight();
            Label1:
            for (int x = 0; x < widthmin; ++x) {
                for (int y = 0; y < heightmin; ++y) {
                    if (isBlack(img.getRGB(x, y)) != isBlack(bi.getRGB(x, y))) {
                        count++;
                        if (count >= min) {
                            break Label1;
                        }
                    }
                }
            }
            if (count < min) {
                min = count;
                result = map.get(bi);
            }
            if(count == 0 && min == 0){
                break;
            }
        }
        return result;
    }

    private static int getOstu(int[][] gray, int width, int height) {
        int grayLevel = 256;
        int[] pixelNum = new int[grayLevel];
        //计算所有色阶的直方图
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                int color = gray[x][y];
                pixelNum[color]++;
            }
        }

        double sum = 0;
        int total = 0;
        for (int i = 0; i < grayLevel; i++) {
            sum += i * pixelNum[i]; //x*f(x)质量矩，也就是每个灰度的值乘以其点数（归一化后为概率），sum为其总和
            total += pixelNum[i]; //n为图象总的点数，归一化后就是累积概率
        }
        double sumB = 0;//前景色质量矩总和
        int threshold = 0;
        double wF = 0;//前景色权重
        double wB = 0;//背景色权重

        double maxFreq = -1.0;//最大类间方差

        for (int i = 0; i < grayLevel; i++) {
            wB += pixelNum[i]; //wB为在当前阈值背景图象的点数
            if (wB == 0) { //没有分出前景后景
                continue;
            }

            wF = total - wB; //wB为在当前阈值前景图象的点数
            if (wF == 0) {//全是前景图像，则可以直接break
                break;
            }

            sumB += (double) (i * pixelNum[i]);
            double meanB = sumB / wB;
            double meanF = (sum - sumB) / wF;
            //freq为类间方差
            double freq = (double) (wF) * (double) (wB) * (meanB - meanF) * (meanB - meanF);
            if (freq > maxFreq) {
                maxFreq = freq;
                threshold = i;
            }
        }

        return threshold;
    }

    public static void trainData() throws Exception {
        File dir = new File(dirPath + "img");
        File[] files = dir.listFiles();
        for (File file : files) {
            //图片预处理 二值化、去噪
            BufferedImage img = removeBackgroud(ImageIO.read(file));
            //图片分割
            List<BufferedImage> listImg = splitImage(img);
            if (listImg.size() == 4) {
                for (int j = 0; j < listImg.size(); ++j) {
                    ImageIO.write(listImg.get(j), "JPG", new File(dirPath + "train/" + file.getName().charAt(j) + "-" + (index++) + ".jpg"));
                }
            }
        }
    }

    public static void main(String[] args) throws Exception {
        /*String base64 =
                "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";
        System.out.println(getTextByBase64(base64));*/
        trainData();
    }
}
