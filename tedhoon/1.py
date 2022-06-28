def solution(s):
    x = s.upper()
    return x.count("P") - x.count("Y") == 0

'''
줄이면
'''


def solution(s):
    return s.upper().count("P") - s.upper().count("Y") == 0
    # 근데 굳이 줄이는 것보다 안 줄인 코드가 가독성이 훨씬 좋은 코드