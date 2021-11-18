import React from 'react'
import { UserContext,BatchContext } from '../../App'

function ComponentC() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <BatchContext.Consumer>
                              {
                                  batch =>{
                                      return <div>
                                            user name is {user}, his batch is {batch}
                                        </div>
                                  }
                              }
                            </BatchContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
