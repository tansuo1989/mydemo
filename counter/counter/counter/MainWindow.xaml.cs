using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace counter
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        public int re;
        public string s,a,b,show;

        public MainWindow()
        {
            InitializeComponent();
           // button_Copy.Click += new RoutedEventHandler(haha);
        }
        //输入数字
        public void setShow(float num)
        {
            if (this.s==null) {
                if (this.a == null||this.a=="0") { this.a = num.ToString(); }else{ this.a = this.a + num.ToString(); }
                this.show = this.a;
            } else if(this.s!=null&&this.re==0)
            {
                if (this.b == null||this.b=="0") { this.b = num.ToString(); }else { this.b = this.b + num.ToString(); }
                this.show = this.a + this.s + this.b;
            }
            textBlock.Text = this.show;
        }

        //四则运算
        public void setType(string t)
        {
            if (this.b == null)
            {
                this.s = t;
                textBlock.Text = this.a.ToString() + this.s;
            }
        }

        //计算结果
        private void getRe(object sender, RoutedEventArgs e)
        {
            switch (this.s)
            {
                case "+":
                    this.re = int.Parse(this.a) + int.Parse(this.b);
                    break;
                case "-":
                    this.re = int.Parse(this.a) - int.Parse(this.b);
                    break;
                case "*":
                    this.re = int.Parse(this.a) * int.Parse(this.b);
                    break;
                default:
                    this.re = int.Parse(this.a) / int.Parse(this.b);
                    break;
            }
            
            this.show = this.a + this.s + this.b + "=" + this.re;
            textBlock.Text = this.show;

        }
        //还原
        private void clear(object sender,RoutedEventArgs e)
        {
            this.re = 0;
            this.a = this.b = this.s =this.show= null;
            textBlock.Text = 0.ToString();
        }

        private void add(object sender,RoutedEventArgs e)
        {
            this.setType("+");
        }
        private void jian(object sender, RoutedEventArgs e)
        {
            this.setType("-");
        }
        private void cheng(object sender, RoutedEventArgs e)
        {
            this.setType("*");
        }
        private void chu(object sender, RoutedEventArgs e)
        {
            this.setType("/");
        }


        private void one(object sender, RoutedEventArgs e)
        {
            //MessageBox.Show("注册成功");
            this.setShow(1);
            
        }
        private void two(object sender, RoutedEventArgs e)
        {
            this.setShow(2);
        }
        private void three(object sender, RoutedEventArgs e)
        {
            this.setShow(3);
        }
        private void four(object sender, RoutedEventArgs e)
        {
            this.setShow(4);
        }
        private void five(object sender, RoutedEventArgs e)
        {
            this.setShow(5);
        }
        private void six(object sender, RoutedEventArgs e)
        {
            this.setShow(6);
        }
        private void seven(object sender, RoutedEventArgs e)
        {
            this.setShow(7);
        }
        private void eight(object sender, RoutedEventArgs e)
        {
            this.setShow(8);
        }
        private void nine(object sender, RoutedEventArgs e)
        {
            this.setShow(9);
        }
        private void zero(object sender, RoutedEventArgs e)
        {
            this.setShow(0);
        }

       // private void haha(object sender, RoutedEventArgs e)
        //{
        //    MessageBox.Show("点击了2");
       // }
    }
}
