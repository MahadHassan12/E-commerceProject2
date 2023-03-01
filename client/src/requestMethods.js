import axios from 'axios';

const Base_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmEyMzk2NjMzMWZkMmFhYTRmZTVmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzY3OTE3NiwiZXhwIjoxNjc3OTM4Mzc2fQ.nzTTfXzfC4vbbSYfWufJjDibwuhTQoeQruuUlEXm-iA'

export const publicRequest = axios.create({
    baseUrl: Base_URL,
});
export const userRequest = axios.create({
    baseUrl: Base_URL,
    header:{token:`Bearer ${TOKEN}`}
});

