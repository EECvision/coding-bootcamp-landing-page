import Author from './coding-bootcamp-testimonial-slider/components/author.component';
import ButtonContextProvider from './coding-bootcamp-testimonial-slider/components/context'


const App =()=>{
    return (
        <ButtonContextProvider>
            <Author/>
        </ButtonContextProvider>
    )
}

export default App;
