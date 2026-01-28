import copy

class Prototype:
    def __init__(self, value):
        self.value = value

    def clone(self):
        return copy.deepcopy(self)

original = Prototype([1, 2, 3])
cloned = original.clone()
cloned.value.append(4)

print(original.value)
print(cloned.value)
