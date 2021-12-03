def solve(wordList: list, target: str):
    print("word list: ", wordList)
    print("target: ", target)
    # Split target into two substrings
    for mid_idx in range(1, len(target)) :
        first_str = target[:mid_idx]
        second_str = target[mid_idx:]

        # Unique element in wordList so first_str equal to second_str is impossible
        if first_str == second_str:
            continue

        # If first_str and second_str in wordList without concern ordering
        if first_str in wordList and second_str in wordList:
            print("result", f'("{first_str}", "{second_str}")')
            print("-------------------------")
            return 

    # If not found
    print("result", None)
    print("-------------------------")
    return  

# Test case 1
input_str_list = ["ab", "bc", "cd"]
target = "abcd"
solve(input_str_list, target)

# Test case 2
input_str_list = ["ab", "bc", "cd"]
target = "cdab"
solve(input_str_list, target)

# Test case 3
input_str_list = ["ab", "bc", "cd"]
target = "abab"
solve(input_str_list, target)

# Test case 4
input_str_list = ["Hello", "Alpha", "finance", "lab"]
target = "labAlpha"
solve(input_str_list, target)

# Test case 5
input_str_list = ["my", "name", "is", "GuuTAR"]
target = "nameGuuTAR"
solve(input_str_list, target)