def solution(array, commands):
    a=[]
    for i,j,k in commands:
        new_array = sorted(array[i-1:j])
        a.append(new_array[k-1])
    return a