def isDivisible(N):
    temp=N 
    sum=0
    while(N):
        k=N%10
        sum+=k
        N/=10
    if (sum%3==0):
        print("True")
    else:
        prinyt("False")

N=int(input("ENter the number:"))
isDivisible(N)