/* eslint-disable jsx-a11y/anchor-is-valid */
export const PaymentHistory = ({ billingSet }) => {
    return (
        <div style={{ color: 'black', fontWeight: 'bold', margin: '20px auto auto 20px' }}>
            <a onClick={() => billingSet('main')} href="#" style={{ cursor: 'pointer' }}> Billing </a>
            <i className="feather icon-chevron-right" /> Payment History
        </div>
    )
}