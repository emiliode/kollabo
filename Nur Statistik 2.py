print("Ungerade Zahlen bis 20:", end= " " )
i = 0
while i<99 :
    i += 1
    if i>20 : break
    if i%2  : continue
    print("%2d" % i, end=',  ')
print ("⧵b⧵b ")

eingabe = input("Ganze, mehrstellige Zahl >> ")
zahl = int(eingabe)
quersumme = 0
while zahl :
    # print(zahl)
    quersumme += zahl%10
    zahl //= 10
print("Quersumme von %s ist %d" % (eingabe, quersumme))
