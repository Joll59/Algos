class Node
  attr_accessor :val, :next
  def initialize(val, next_node)
      @val = val
      @next = next_node
  end
end

class LinkedList
    attr_accessor :head
  def initialize(val)
    @head = Node.new(val, nil)
  end
  
  def add_to_beginning(val)
  end
  def add_to_end(val)
  end
  def find(val)
  end
  def delete(val)
  end
  def return_values
    elements = []
    current = self.head
    while current.next
      elements << current.val
      current = current.next
    end
    elements << current.val
  end
end

new_list = new_list = LinkedList.new(1)
new_list.add_to_end(2)
new_list.add_to_end(3)
new_list.add_to_end(4)
new_list.add_to_end(5)
