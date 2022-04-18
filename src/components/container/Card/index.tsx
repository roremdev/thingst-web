import Button from '@baseComponents/Button'

export default ({}) => {
    const cardImage =
        'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <div className="card">
            <div className="card-image">
                <div
                    style={{
                        backgroundImage: `url(${cardImage})`,
                    }}
                ></div>
            </div>
            <div className="card-content">
                <div className="card-content-headline">
                    <h3 className="font-bold text-gray-bold text-2xl">
                        Laptop
                    </h3>
                    <span className="font-medium text-gray text-lg">
                        $ 8,725MXN
                    </span>
                </div>
                <p className="font-light text-gray text-lg">
                    Get <b>GST Invoice</b> & <b>Save 18%</b> on business
                    purchases.
                </p>
                <p className="font-light text-gray text-lg">
                    Order Will be delivered with-in 3 working days by BlueDart.
                </p>
            </div>
            <Button text="Reserve" handleClick={handleClick} color="#81A1C1" />
        </div>
    )
}
