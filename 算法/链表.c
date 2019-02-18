#include<stdio.h>
#include<stdlib.h>

struct lb{
    int age;
    struct lb *next;
};

struct lb *new(int len);//创建链表
void insert(struct lb *list,int n);//在第n个节点后插入一个节点
void change(struct lb *list,int n,int age);//修改节点
void delete(struct lb *list,int n);//删除节点
void out(struct lb *list);//打印出链表的所有节点

struct lb *new(int len){
     struct lb *list,*item,*head,*end;
     int age=0;
     int i;

     head=(struct lb *)malloc(sizeof(struct lb));
     end=head;

     printf("请输入%d个数字，创建链表",len);
     for(i=0;i<len;i++){
         item=(struct lb *)malloc(sizeof(struct lb));
         scanf("%d",&item->age);
         end->next=item;
         end=item;
     }
    //  end->next=NULL;//这一行应该可以不用，因为默认的next就是null
    return head;
}

void insert(struct lb *list,int n){
    struct lb *new;
    int i;
    for(i=0;i<n;i++){
        list=list->next;
    }
    if(list!=NULL){
        new=(struct lb *)malloc(sizeof(struct lb));
        printf("请输入要添加的节点");
        scanf("%d",&new->age);
        new->next=list->next;
        list->next=new;
    }else{
        printf("第%d个节点不存在",n);
    }
}

void change(struct lb *list,int n,int age){
    int i;
    for(i=0;i<n;i++){
        list=list->next;
    }
    if(list!=NULL){
        list->age=age;
    }else{
        printf("修改失败\n");
    }
}

void delete(struct lb *list,int n){
    int i;
    struct lb *item;
    for(i=0;i<n;i++){
        item=list;
        list=list->next;
    }
    if(list!=NULL){
        item->next=list->next;
        free(list);
    }else{
        puts("删除失败");
    }

}

void out(struct lb *list){
     printf("输出：\n");
     while(list->next!=NULL){
         list=list->next;
         printf("%d\n",list->age);
     }
}

int main(){
    struct lb *list;
    int n,age;

    list=new(5);
    out(list);

    insert(list,3);
    out(list);

    puts("请输入要修改的元素序号");
    scanf("%d",&n);
    puts("请输入修改后的值");
    scanf("%d",&age);
    change(list,n,age);
    out(list);

    puts("请输入要删除的元素序号");
    scanf("%d",&n);
    delete(list,n);
    out(list);
}

//疑问：为什么有些地方需要用&，而有些地方不需要？解答:item->age 是对结构体指针取值，返回的是值而不是指针，而scanf 需要传的参数是指针，所以要加&
