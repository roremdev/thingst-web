import Navbar from '@containerComponents/Navbar'
import Banner from '@containerComponents/Banner'
import Aside from '@containerComponents/Aside'
import ListView from '@containerComponents/ListView'

// import { getProjectinfo } from '@services/index.service'

export default () => {
    // const { loading, data } = getProjectinfo()
    const handleAsside = () => {
        const shadow = document.querySelector('.shadow')
        const asside = document.querySelector('.aside')

        shadow.classList.toggle('shadow_show')
        shadow.classList.toggle('shadow_hidden')
        asside.classList.toggle('aside_show')
        asside.classList.toggle('aside_hidden')
    }
    // console.log(loading, data)
    return (
        <>
            <Navbar handleClick={handleAsside} />
            <Banner />
            <main className="main">
                <ListView />
            </main>
            <div>
                <span className="shadow shadow_hidden"></span>
                <Aside handleClick={handleAsside} />
            </div>
            {/* <Footer /> */}
        </>
    )
}
