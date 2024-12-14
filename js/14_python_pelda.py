def reverse_string_2(str):
    result = ""

    for i in range(len(str) - 1, -1, -1):
        result += str[i]
    
    return result

print(reverse_string_2("JavaScript"))