import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Lesson01 from './lessons/lesson01/Lesson01';
// Импорт функции компонента
// import Lesson02 from "./lessons/lesson02/Lesson02";
// import Lesson03 from './lessons/lesson03/Lesson03';
// import Homework03 from './homeworks/homework03/Homework03';
// import Lesson04 from "./lessons/lesson04/Lesson04";
// import Homework04 from './homeworks/homework04/Homework04';
// import Lesson05 from './lessons/lesson05/Lesson05';
import Homework05 from './homeworks/homework05/Homework05';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // этот пустой тэг называется - react-фрагмент
    // мы используем его чтобы обернуть несколько дочерних компонентов и не нарушать правила react
   <>
        {/* <Lesson01 /> */}
        {/* <Lesson02 /> */}
        {/* <Lesson03 /> */}
        {/* <Homework03 /> */}
        {/* <Lesson04 /> */}
        {/* <Homework04/> */}
        {/* <Lesson05/> */}
        <Homework05/>

   </> 

);
