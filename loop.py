l=s.split()
    # print(l)
    st=""
    for i in l:
        if i=="one":
            st+="1"
        elif i=="two":
            st+="2"
        elif i=="three":
            st+="3"
        elif i=="four":
            st+="4"
        elif i=="five":
            st+="5"
        elif i=="six":
            st+="6"
        elif i=="seven":
            st+="7"
        elif i=="eight":
            st+="8"
        elif i=="nine":
            st+="9"
        elif i=="zero":
            st+="0"
        else:
            ts=0
            c=0
            if i=="double":
                c=2
                j=l.index(i)
                k=j+1
                t=l[k]
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
                    ts+=8
                elif t=="nine":
                    ts=9
                elif t=="zero":
                    ts=0
            elif i=="triple":
                c=3
                j=l.index(i)
                k=j+1
                t=l[k]
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
            for i in range(0,c-1):
                st+=str(cnv)
    return st