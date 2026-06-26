export class EventEmitter<T extends Record<string, any>> {
  private listeners = new Map<keyof T, Set<Function>>();
  on<K extends keyof T>(event: K, fn: (data: T[K]) => void): () => void {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(fn);
    return () => this.listeners.get(event)?.delete(fn);
  }
  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.listeners.get(event)?.forEach(fn => fn(data));
  }
  off<K extends keyof T>(event: K, fn: (data: T[K]) => void): void {
    this.listeners.get(event)?.delete(fn);
  }
  once<K extends keyof T>(event: K, fn: (data: T[K]) => void): void {
    const unsub = this.on(event, (data) => { unsub(); fn(data); });
  }
}
