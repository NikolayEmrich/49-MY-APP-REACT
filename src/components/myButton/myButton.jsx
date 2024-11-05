//  ------ ВАРИАНТ КОДА БЕЗ ДЕСТРУКТУРИЗАЦИИ ------
// import './myButton.css'

// function MyButton(props) {
//      console.log(props)
//      return <button 
//           onClick={props.func} 
//           className='my-button'>{props.text}
//      </button>;
// }

//    export default MyButton;


//  ------ ВАРИАНТ КОДА С ДЕСТРУКТУРИЗАЦИЕЙ ------
// Забираем значения из объекта по ключам и кладем их в переменные с определенным именем в одну строчку
   import './myButton.css'

function MyButton({func, isDanger, text}) {
     console.log(isDanger)
     return <button 
          onClick={func} 
          className={`my-button ${isDanger ? 'btn-danger' : ''}`}>{text}
     </button>;
}

   export default MyButton;


