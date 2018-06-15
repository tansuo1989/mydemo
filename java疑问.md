1. java 中long  和 int 直接相加程序会出错吗？
```java
public class Demo { 
        public static void main(String args[]) { 
                long num = 100 ; 
                int x = num + 2 ; 
                System.out.println(x) ; 
        } 
} 
```

2. java 类型怎样转换？最大的整型加一个数的结果是什么？
```java
      public class Demo { 
                 public static void main(String args[]) { 
                     int num = 2147483647 ; 
                     num += 2L ; 
                     System.out.println(num) ; 
                 } 
             } 
//结果是：-2147483647
```

3. 答案是：5，为什么？
```java
class Happy { 
        public static void main(String args[])     { 
            int i = 1 ;     
            int j = i++ ; 
            if((i==(++j))&&((i++)==j))     { 
                i += j ; 
            } 
            System.out.println("i = "+i); 
        } 
    } 
```

4. 结果是：100,为什么？
```java
  public class Demo { 
    public static void main(String args[]) { 
        int num = 50 ; 
        num = num ++ * 2 ; 
        System.out.println(num) ; 
    } 
} 
```

 
      
