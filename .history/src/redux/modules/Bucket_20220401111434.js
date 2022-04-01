// Actions
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";

// 초기값
const initialState = {
  list: [
    { text: "친구랑 쇼핑하기", completed: false },
    { text: "여자친구랑 여행가기", completed: false },
    { text: "테니스 치기", completed: false },
    { text: "새 집으로 이사가기", completed: false },
  ],
};

// action Creators(액션을 dispatch 하기 위해 만드는 함수)
export function createBucket(bucket) {
  console.log("액션을 생성했음");
  return { type: CREATE, bucket: bucket }; // 액션 객체 리턴, bucket - 추가할 값
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

// Reducer (수정사항을 바꾸는 곳)
export default function reducer(state = initialState, action = {}) {
  // 기본값 설정 (action에 값이 안들어 온다면 빈 딕셔너리)
  switch (action.type) {
    case "bucket/CREATE": {
      console.log("리듀서에 액션생성값을 넣음");
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }

    case "bucket/UPDATE": {
      console.log("이제 완료할꺼야!");
      console.log(state, action);

      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      console.log(state, action);
      const new_bucket_list = state.list.filter((l, idx) => {
        console.log(
          parseInt(action.bukcet_index) !== idx, // parseInt(문자를 숫자로 바꾸는 내장함수)
          parseInt(action.bucket_index),
          idx
        );
        return parseInt(action.bucket_index) !== idx;
      });
      console.log(new_bucket_list);
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
