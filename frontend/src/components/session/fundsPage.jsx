import React from 'react';
import './miscPage.css';

class fundsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    addBalance(amount){
        return(e)=>{
            const data={
                userId : this.props.currentUser._id,
                amount: amount

            }
            // debugger;
            this.props.addBalance(data).then(res=>{
                // debugger;
                this.props.history.push('/');
            })
        }
    }

    render() {
        const amounts=[5,10,25,50,100];
        const fundHolder=amounts.map(amount=>{
            return (
              <div key={amount} className="addFund">
                <div className="addText">Add {`$${amount}.00`}</div>
                <div className="blackBox">
                  <div className="fundAmount">{`$${amount}.00`}</div>
                  <div onClick={this.addBalance(amount)}className="fundButton">Add funds</div>
                </div>
              </div>
            );
        })
        return (
            <>
            <div className='fundsContainer'>
                <div className='fundsHeader'>Add Funds to Your Steam Wallet</div>

                <div className='fundsDescHead'>Add Funds to Your Steam Wallet</div>

                <div className='fundsDesc'>Funds in your Steam Wallet may be used for the purchase of any game on Steam or within a game that supports Steam transactions.</div>
                <div className='fundsDesc'>You’ll have a chance to review your order before it’s placed.</div>


                <div className = 'addContainer'>
                    {fundHolder}
                    {/* <div className='addFund'>
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
                    </div> */}
                </div>
            </div>
            </>
        )
    }
}

export default fundsPage;