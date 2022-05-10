s=input("enter the sting")
i=0
b=s.split()
string=" "
while i<len(b):

    if b[i]=="one":
        string+=str(1)
    elif b[i]=="two":
         string+="2"
    elif b[i]=="three":
        string+="3"
    elif b[i]=="four":
      string+="4"
    elif b[i]=="five":
        string+="5"
    elif b[i]=="six":
        string+="6"  
    elif b[i]=="seven":
        string+="7"
    elif b[i]=="eight":
        string+="8"
    elif b[i]=="nine":
        string+="9"   
    elif b[i]=="zero":
        string+="0"
    else:
        pass
    i=i+1 
print(string)  