
# n=int(input("enter hte  number"))
# div=int(input("enter the numbber"))
# sum=0
# for i in range(1,n+1):
#     a=i%div
#     sum=sum+a
# print(sum)
    
    
    
# n=int(input("enter the number"))
# m=int(input("enter the number"))
# i=0
# sum=0
# sum1=0
# while i<=m:
#     if i%n==0:
#         sum+=i
#     else:
#         sum1+=i
        
#     c=sum1-sum
#     i=i+1
# print(c)
    

# def count(r,unit):
#     a=r*unit
#     sum=0
#     for i in range(len(array)+1):
#         if sum>=a:
#             sum+=array[i]
#         return i+1
# r=int(input("enter the number"))
# unit=int(input("enter the number"))
# array=list(map(int,input("enter the list").split()))
# print(count(r,unit))

        
def is_leap(year):
    leap = False
    if year%4==0 and year%400==0:
        return "True"
    elif year%100==0:
        return "False"
year=int(input("enter the number"))
print(is_leap(year))