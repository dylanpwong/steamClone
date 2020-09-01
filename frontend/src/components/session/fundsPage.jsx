import React from 'react';
import './miscPage.css';

class fundsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className='fundsContainer'>
                <div className='fundsHeader'>Add Funds to Your Steam Wallet</div>

                <div className='fundsDescHead'>Add Funds to Your Steam Wallet</div>

                <div className='fundsDesc'>Funds in your Steam Wallet may be used for the purchase of any game on Steam or within a game that supports Steam transactions.</div>
                <div className='fundsDesc'>You’ll have a chance to review your order before it’s placed.</div>


                <div className = 'addContainer'>
                    <div className='addFund'>
                        <div className = 'addText'>Add $5.00</div>
                        <div className = 'blackBox'>
                            <div className = 'fundAmount'>$5.00</div>
                            <div className = 'fundButton'>Add funds</div>
                        </div>
                    </div>
                    <div className='addFund'>
                        <div className = 'addText'>Add $10.00</div>
                        <div className = 'blackBox'>
                            <div className = 'fundAmount'>$10.00</div>
                            <div className = 'fundButton'>Add funds</div>
                        </div>
                    </div>
                    <div className='addFund'>
                        <div className = 'addText'>Add $25.00</div>
                        <div className = 'blackBox'>
                            <div className = 'fundAmount'>$25.00</div>
                            <div className = 'fundButton'>Add funds</div>
                        </div>
                    </div>
                    <div className='addFund'>
                        <div className = 'addText'>Add $50.00</div>
                        <div className = 'blackBox'>
                            <div className = 'fundAmount'>$50.00</div>
                            <div className = 'fundButton'>Add funds</div>
                        </div>
                    </div>
                    <div className='addFund'>
                        <div className = 'addText'>Add $100.00</div>
                        <div className = 'blackBox'>
                            <div className = 'fundAmount'>$100.00</div>
                            <div className = 'fundButton'>Add funds</div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default fundsPage;