import React from 'react'

function Loginpage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">login page</div>
    <Card className="w-full max-w-md">
        <CardHeader>
            <CardTitle className="text-center taxt-3xl"> Login</CardTitle>
        </CardHeader>
        <AuthForm/>
    </Card>
  )
}

export default Loginpage;