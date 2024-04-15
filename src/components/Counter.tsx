import { useAppDispatch, useAppSelector } from "@/types/redux";
import { incremented, decremented } from "@/redux/slice/counterSlice";

export function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
}
