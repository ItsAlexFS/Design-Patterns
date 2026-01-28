class Subject {
  constructor() { this.obs = []; }
  attach(o) { this.obs.push(o); }
  notify() { this.obs.forEach(o => o.update()); }
}

class Observer {
  update() { console.log("Notificado"); }
}

const s = new Subject();
s.attach(new Observer());
s.notify();
