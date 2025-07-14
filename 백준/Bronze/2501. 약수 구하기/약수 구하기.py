num, numth = map(int, input().split())
count = 0

for i in range(1, num+1):
    if num % i == 0:
        count = count + 1
        if numth == count:
            print(i)
            break;

if numth != count:
    print(0)
