import MyButton from '../../components/myButton/myButton'

function Lesson03() {

    const handleClick = () => {
        console.log('click!')
    }
    const handleSubmit = () => {
        console.log('submit!')
    }
    const handleReset = () => {
        console.log('reset!')
    }

    return (
        <div className="lesson-container">
            <h2>Lesson03</h2>
            <p>React props</p>
            <p>Это способ передачи данных от компонента-родителя к компоненту-ребенку</p>
            <p>Мы хотим научиться передавать в компонент разные данные:</p>
            <MyButton text = {'Set'} func={handleClick} isDanger = {true}/>
            <MyButton text = {'Submit'} func={handleSubmit} isDanger = {false}/>
            <MyButton text = {'Reset'} func={handleReset} isDanger = {true}/>
        </div>
    )
}

export default Lesson03;