def reverse_string_2(str):
    result = ""

    i = 1
    while i <= len(str):
        result += str[-i]
        i += 1
    
    return result

print(reverse_string_2("JavaScript"))