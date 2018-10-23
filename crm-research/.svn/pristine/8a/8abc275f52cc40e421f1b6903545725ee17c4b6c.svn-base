package com.run.crmresearch.utils;

import com.sun.org.apache.xml.internal.security.exceptions.Base64DecodingException;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import java.io.*;
import java.util.UUID;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/10 15:27
 * @Version 1.0
 **/
public class Base64TransferImgUtil {

    /**
     * @Author hupeng
     * @Description //TODO
     *              图片转为Base64
     * @Date 18:43 2018/9/11
     * @Param [file]
     * @return java.lang.String
     **/
    public static String imgBufferedToBase64String(File file){//将图片文件转化为字节数组字符串，并对其进行Base64编码处理
        InputStream in = null;
        byte[] data = null;
        //读取图片字节数组
        try
        {
            in = new FileInputStream(file);
            data = new byte[in.available()];
            in.read(data);
            in.close();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        //对字节数组Base64编码
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(data);//返回Base64编码过的字节数组字符串
    }

    /**
     * @Author hupeng
     * @Description //TODO
     *              Base64转图片
     * @Date 18:38 2018/9/11
     * @Param [base64Str, filePath, fileName]
     * @return void
     **/
    public static boolean base64ToImg(String imgStr , String filePath , String fileName)
    {   //对字节数组字符串进行Base64解码并生成图片
        if (imgStr == null) //图像数据为空
            return false;
        BASE64Decoder decoder = new BASE64Decoder();
        try
        {
            //Base64解码
            byte[] b = decoder.decodeBuffer(imgStr);
            for(int i=0;i<b.length;++i)
            {
                if(b[i]<0)
                {//调整异常数据
                    b[i]+=256;
                }
            }
            //生成jpeg图片
            if (fileName == null) {
                fileName = UUID.randomUUID().toString().replaceAll("-", "") + ".jpg";
            }
            File file = new File(filePath + fileName);
            OutputStream out = new FileOutputStream(file);
            out.write(b);
            out.flush();
            out.close();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public static void main(String[] args) throws IOException, Base64DecodingException {
        //String base64 =
                //"R0lGODlhagAeAIcAAAAAAAAARAAAiAAAzABEAABERABEiABEzACIAACIRACIiACIzADMAADMRADMiADMzADd3REREQAAVQAAmQAA3QBVAABVVQBMmQBJ3QCZAACZTACZmQCT3QDdAADdSQDdkwDungDu7iIiIgAAZgAAqgAA7gBmAABmZgBVqgBP7gCqAACqVQCqqgCe7gDuAADuTwD/VQD/qgD//zMzMwAAdwAAuwAA/wB3AAB3dwBduwBV/wC7AAC7XQC7uwCq/wD/AEQAREQAiEQAzEREAEREREREiEREzESIAESIRESIiESIzETMAETMRETMiETMzEQAAFUAAFUAVUwAmUkA3VVVAFVVVUxMmUlJ3UyZAEyZTEyZmUmT3UndAEndSUndk0nd3U/u7mYAAGYAZlUAqk8A7mZmAGZmZlVVqk9P7lWqAFWqVVWqqk+e7k/uAE/uT0/unlX/qlX//3cAAHcAd10Au1UA/3d3AHd3d11du1VV/127AF27XV27u1Wq/1X/AFX/VYgAiIgAzIhEAIhERIhEiIhEzIiIAIiIRIiIiIiIzIjMAIjMRIjMiIjMzIgAAIgARJkATJkAmZMA3ZlMAJlMTJlMmZNJ3ZmZAJmZTJmZmZOT3ZPdAJPdSZPdk5Pd3ZkAAKoAAKoAVaoAqp4A7qpVAKpVVapVqp5P7qqqAKqqVaqqqp6e7p7uAJ7uT57unp7u7qr//7sAALsAXbsAu6oA/7tdALtdXbtdu6pV/7u7ALu7Xbu7u6qq/6r/AKr/Var/qswAzMxEAMxERMxEiMxEzMyIAMyIRMyIiMyIzMzMAMzMRMzMiMzMzMwAAMwARMwAiN0Ak90A3d1JAN1JSd1Jk91J3d2TAN2TSd2Tk92T3d3dAN3dSd3dk93d3d0AAN0ASe4AT+4Anu4A7u5PAO5PT+5Pnu5P7u6eAO6eT+6enu6e7u7uAO7uT+7unu7u7u4AAP8AAP8AVf8Aqv8A//9VAP9VVf9Vqv9V//+qAP+qVf+qqv+q////AP//Vf//qv///ywAAAAAagAeAAAI//8EDiRY0OBBhAkVGrTxr+FCiBElTqRYcaANjBgtbuTY0aPAhg8/jiRZ0uRJlARFpmTZEmFIlyZXxiyY0eZNmhIz5jTojleeVUF5ufNo0527bkMPHtXJs6A7oLx4rdKUJw+vpby6dSOKMKnUmzYFdlsltdtAn1KdKvzpk+oqn3m6ElyFJo+mswe7Wb2rqezPvA5tWh1YN8/MtQSnQvVLWBNWtFCD5glcsO0/qav4QiZ49R+as+5sHEWTGGHQvUPdoamaRzEaG0kPE505VarVskwNtq36T7MNoKYPAp76N+gqxXL/icZJVypeiFdXd4PdDbHw5VZvS+dKcG/DnyERC+29yqv13ORQrYrmjF0gU/NDf8JFvxyNO828dhakqt7vz/Y60yq2n9wrCKjH5tvKM8vkKguk4VzDbKo80AhwoAKxYtBAge4izB1N7qNqN7nEGk6TuPzKDSGosCqQw8Ju06qtF+kq60HBcIqPKtUWKvAxGN/TzK2qViFLE4OuSq2+izDKrLKEzGsxyPeKFAo/ygx6LC4o+buNyQhBvJBDCqeyq7sGywKNLRQpA5OguKakEq0n38RMMwmjZM3CiH6qqss5I2KuOe+qUgoi/FYMlKSwGj3pukUtCksnR2Fs9FITI9V004k04vRTUEMNNCAAOw==";
        String base64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcU\n" +
                "FhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgo\n" +
                "KCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeAFoDASIA\n" +
                "AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA\n" +
                "AAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3\n" +
                "ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm\n" +
                "p6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA\n" +
                "AwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx\n" +
                "BhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK\n" +
                "U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3\n" +
                "uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0HTNP\n" +
                "s3020Z7S3ZmhQkmNSSdo9qnl0nTpVCy6faOoYMA0KkZBBB6dQQCPcVl3VjpWu+C7Wz1xA2m3cNuG\n" +
                "SZ2hLElCinlWBL7Rjg549q8Q1/wxpE/xM0/w38NT/Zt9Bua+1G3kuHazwGDjzPMIPB2kbRhtql/m\n" +
                "YKAfQ39m2P8Az5W3/fpf8KP7Nsf+fK2/79L/AIVarz/4reNLDwvLothrFh9q03VpWS5kMzIIo0aP\n" +
                "cWVVJkXD8p0YAqchiKAO2/s2x/58rb/v0v8AhR/Ztj/z5W3/AH6X/CuBuPGvii4u9Ok0/wADarHp\n" +
                "txdLCkt1cLC53AqTPEI5HjjDZbdx91TnB2n0igDNS1sZbto4LTT5I4spORtLxSYRlUqF7q2eSCPl\n" +
                "4IbIsf2bY/8APlbf9+l/wry3x94k1Xw18SNNh1i+R/CWoqJYomggzFNDtYIrN0JkWP53IVRKcFSu\n" +
                "9ew+Hev6h4nsdQ1S5FqNLkvJY9MaGNlaW3RiokfcxOSRjG1SNpOORgA17zTNLjiu57+K0Fj5OJUn\n" +
                "ijEKKNxZiSvQg85JGFHA5zO2n232hAun2RgKsWcqAwbI2gLtwQRuycjGBwc8TfaPLn8u6aCLzZfL\n" +
                "th5uWl+TceCBhuH4GflXOeoHg/gDw1H8WdL8ReIfFk3n6lNK1lZFd6pY7Y9wKKHAZQZF+U/3SSSW\n" +
                "JoA9yXSNPW4eYWkO91VCCuVwCSML0B+Y5IGTxnOBjgdTVU1K7VFCqszgADAA3GpPgf4rn174fRXG\n" +
                "t3Gbi0ujYNczyDMx+TZk4HzHzFTuWIzkk03Vv+Qre/8AXZ//AEI0AaHjfXtV0bwIP+Eb0++vNZeG\n" +
                "COHyLN5lj3g5c4GDgI3rhim4YYZ4X4da5ZeDfDl0mvab4t0+8vmafUdcu9LwkcrDA+c7mIDHC7lb\n" +
                "LMSQAxA9OsfE1nBZW8LxXBaONUJCrjIGPWnN4nszcJIPtoRVZTEETaxJGGPfIwQMED5jkHjAB0Es\n" +
                "bO8LLM8YRtzKoXEg2kbWyCcZIPGDlRzjIPlfxm0S61jxf8P/ACtMnv7GK+b7XttzLGkZkgz5nBAU\n" +
                "gN14wDXUWPiNI90ksEUU0t1JJOYYM+bH8yxZO4Yk2CHcTkfKQBjBElx4g09LGWOys5lcMZ0jRvIV\n" +
                "5d3mfMyHIDPy3Bzk5DZIIB0kTfaJVnjknWNPMiMTR7AzBgNx3Lu42nBB2kNnkbSLFc//AMJXY/8A\n" +
                "PK5/75X/ABo/4Sux/wCeVz/3yv8AjQB5n8druXxVZy6Botq8n9kK+q6jdSZRLdY0lURkEZ3vyV6Z\n" +
                "G1hlSWHcfB/xHF4m8BadcIiRz2qizuI40CqskYA4AVVAKlWwowN2O1Ry634Z0mVr+PRliuJrqMvL\n" +
                "DaxLI0sjGMOTkEn962T1wzepyeHbrQtB+2HT7Frb7VL5jx20flw8cLti3lVbaFDFQNxGSOgAB3Fe\n" +
                "H+HH1z4WxeJNCt/D2q6rbyStd6Rc2lq1yjFlKgTspXGNkeQAD949Cpr0yXxPZu8LL9tjCNuZVRMS\n" +
                "DaRtbOTjJB4wcqOcZBk/4Sux/wCeVz/3yv8AjQBj/BzwnP4O8Ew2V/xf3ErXVygcOsbsAAoIHZVX\n" +
                "PX5t2CRis3Vv+Qre/wDXZ/8A0I11X/CV2P8Azyuf++V/xrkb6VZ724mQELJIzgHrgnNAH//Z";
        //base64ToImg(base64 , "E:\\temp\\img\\" , null);
        //System.out.println(imgBufferedToBase64String(new File
        // ("E:\\temp\\img\\6d05e7f596f241a28c718de6109d3c41.jpg")));
        base64ToImg(base64 , "E:\\temp\\img\\" , null);
    }
}
