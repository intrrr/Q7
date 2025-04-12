import { create } from 'zustand';

const useStore = create((set) => ({
  // 全局状态
  count: 0,
  user: null,
  
  // 操作方法
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setUser: (userData) => set({ user: userData }),
  reset: () => set({ count: 0, user: null }),
}));

export default useStore;