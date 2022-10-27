import axios from 'axios'

export const fetchStudentProgressByStudentId = async (studentId: string = '102817723') => {
  console.log(studentId)
  try {
    const { data } = await axios.get<any>(
      process.env.REACT_APP_BACKEND_API+ `/student-progression-dashboard-data/${studentId}`,
      {
        headers: {
          Accept: 'application/json',
          'x-api-key': process.env.REACT_APP_BACKEND_API_X_API_KEY as string,
          'x-api-key-id': process.env.REACT_APP_BACKEND_API_X_API_KEY_ID as string,
        },
      },
    );

    // Parse JSONL to JSON
    for(let dataItem of data.data) {
      dataItem.teaching_period_weeks = JSON.parse(dataItem.teaching_period_weeks)
    }
    for(let dataItem of data.data) {
      dataItem.units = JSON.parse(dataItem.units)
    }

    console.log('raw data: ', data)

    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
