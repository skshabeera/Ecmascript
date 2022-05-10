s=input("enter the number")
l=s.split()
st=""
i=0
while i<len(l):
    if l[i]=="one":
        st+="1"
    elif l[i]=="two":
        st+="2"
    elif l[i]=="three":
        st+="3"
    elif l[i]=="four":
        st+="4"
    elif l[i]=="five":
        st+="5"
    elif l[i]=="six":
        st+="6"
    elif l[i]=="seven":
        st+="7"
    elif l[i]=="eight":
        st+="8"
    elif l[i]=="nine":
        st+="9"
    elif l[i]=="zero":
        st+="0"
    else: 
        ts=0
        c=0
        if l[i]=="double":
            c=2
            i=i+1
            t=l[i]
            if t=="one":
                ts=1
            elif t=="two":
                ts=2
            elif t=="three":
                ts=3
            elif t=="four":
                ts=4
            elif t=="five":
                ts=5
            elif t=="six":
                ts=6
            elif t=="seven":
                ts=7
            elif t=="eight":
                ts=8
            elif t=="nine":
                ts=9
            elif t=="zero":
                ts=0
        elif l[i]=="triple":
            c=3
            i=i+1
            t=l[i]
            if t=="one":
                ts=1
            elif t=="two":
                ts=2
            elif t=="three":
                ts=3
            elif t=="four":
                ts=4
            elif t=="five":
                ts=5
            elif t=="six":
                ts=6
            elif t=="seven":
                ts=7
            elif t=="eight":
                ts=8
            elif t=="nine":
                ts=9
            elif t=="zero":
                ts=0
        cnv=ts
        for i in range(0,c):
            st+=str(cnv)
    i+=1
print(st)       
            