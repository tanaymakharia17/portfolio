
const Error = ({error}) => {
    return(
        <div style={{
            padding:"10px"
        }}>
            <h1>{error.message}</h1>
        </div>
    );

};


export default Error;