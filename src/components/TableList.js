import {Table} from '../components/styles/table/Table.styled';
import {Thead} from '../components/styles/table/Thead.styled';
import {Tbody} from '../components/styles/table/Tbody.styled';
import {Td} from '../components/styles/table/Td.styled';
import {Th} from '../components/styles/table/Th.styled';

const TableList = ({ selectedColumns, usersList }) => {
  // To create a new data array with keys and values
  const getUserInfo = () => {
    const array = [];

    usersList.length > 0 && usersList.map(user => {
        const obj = Object.create({});

        for (let key in user) {
          if (selectedColumns.includes(key)) {
            if (typeof user[key] === 'object') {
              let keys = Object.keys(user[key]);
              obj[key] = user[key][keys[0]];
            } else {
              obj[key] = user[key];  
            }
          }
        }
        array.push(obj);
      })

      return array;
    }
  
  const users = getUserInfo();

  // To check the keys for compliance
  const columns = Object.keys(usersList[0]).filter(item => selectedColumns.includes(item));

  return (
    <Table>
      <Thead>
        <tr>
          {
            columns.map((column, id) => {
              return (
                <Th key={id}>{column}</Th>
              )
            })
          }
        </tr>
      </Thead>
      <Tbody> 
        { 
          users.map((user, id) => {
            return (
              <tr key={id}>
                {
                  Object.values(user).map((value, id) => {
                    return (
                      <Td key={id}>{value}</Td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </Tbody>
    </Table>
  )
}

export default TableList;
