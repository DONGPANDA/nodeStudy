## 继承
1.继承私有公有

```
Child.prototype=new Futher()
```
2.继承私有

```javascript
function Child(name,age) {
  Futher.call(this,name,age)
  this.age=age
}
```
3.继承公有

```javascript
Child.prototype.__proto__=Futher.prototype;
Child.prototype=Object.create(Futher.prototype);
Object.setPrototypeOf(Child.prototype,Futher.prototype)
```