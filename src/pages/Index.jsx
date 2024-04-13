import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, IconButton, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Box maxWidth="500px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>
      <Flex mb={8}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
        <Button leftIcon={<FaPlus />} onClick={handleAddTodo}>
          Add
        </Button>
      </Flex>
      <List spacing={4}>
        {todos.map((todo, index) => (
          <ListItem key={index} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
            <Flex align="center">
              <Text as={todo.completed ? "del" : "span"}>{todo.text}</Text>
              <Spacer />
              <IconButton icon={<FaCheck />} aria-label="Complete todo" onClick={() => handleToggleComplete(index)} mr={2} />
              <IconButton icon={<FaTrash />} aria-label="Remove todo" onClick={() => handleRemoveTodo(index)} />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
