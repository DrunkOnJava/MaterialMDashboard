import React from 'react';
import { TodoList } from './TodoList';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';

const TodoDemo = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Todo Application" />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto">
          <TodoList />
        </div>
      </main>
    </div>
  );
};

export default TodoDemo;