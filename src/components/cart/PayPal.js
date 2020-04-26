import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'EUR'; // or you can set this value from your props or state
 
        const client = {
            sandbox:    'Aef0ERTHvvzLtU3z3spPVZkZTjZ1R1eCExeFApw6vJ9c45bIb6aE05vjSmrAx7MvsrGQscxBvYSlIqz77Y',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={this.props.total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
            />
        );
    }
}