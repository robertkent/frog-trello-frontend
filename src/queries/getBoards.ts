import {gql} from "@apollo/client";

const GET_BOARDS = gql`
    {
        getBoards {
            boards {
                _id
                title
                cards {
                    _id
                    title
                    description
                    dueDate
                }
            }
        }
    }
`

export default GET_BOARDS