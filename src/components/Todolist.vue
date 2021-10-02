<template>
  <div class="todolist">
    <h1 class="todolist__header">Список дел</h1>
    <div class="todolist__content">
      <li
        class="todolist__content__list"
        v-for="(a, i) in savedTodolist"
        :key="i"
      >
        <div class="todolist__content__group">
          <div class="todolist__content__checkbox" @click="checkTodolist(i)">
            <transition-group name="checkboxAnimation">
              <div
                :style="{ background: savedTodolist[i].color }"
                v-if="savedTodolist[i].checked == true"
                class="todolist__content__checkbox__checked"
              ></div>
            </transition-group>
          </div>
          <span class="todolist__content__title">{{
            savedTodolist[i].title
          }}</span>
        </div>
        <span class="todolist__content__date">
          Дата публикации : {{ savedTodolist[i].date }}</span
        >
      </li>
    </div>
    <span class="todolist__emptyAlert" v-show="todolistEmptyCheck">
      Список дел пуст. Щелкните значок, чтобы добавить!
    </span>
    <div class="todolist__btnGroup">
      <button @click="setCreateTodolistState" class="todolist__create">
        <i class="fas fa-plus-circle"></i>
      </button>
      <button class="todolist__delete" @click="setDeleteTodolistState">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    <form class="todolist__create__form" v-show="createTodolistState == true">
      <span class="todolist__create__header">Новые задачи</span>
      <input
        class="todolist__create__input"
        type="text"
        placeholder="ex) Go to gym"
        @input="getCreateTodolistInputValue"
      />
      <div
        class="todolist__create__inputAlert"
        v-show="createTodolistInputEmptyCheck"
      >
        <p>Пожалуйста, введите вашу задачу.</p>
      </div>
      <div>
        <label
          class="todolist__create__color__label"
          style="font-size: 0.8rem"
          for="color"
          >Выберите цвет.</label
        >
        <input
          class="todolist__create__color"
          type="color"
          value="#FFFFFF"
          @input="getCreateTodolistColorValue"
          name="color"
          id="color"
        />
      </div>
      <div class="todolist__create__btnGroup">
        <button class="todolist__create__submit" @click="createTodolistSubmit">
          Добавить
        </button>
        <button
          class="todolist__create__cancel"
          @click="
            $event.preventDefault();
            createTodolistState = false;
          "
        >
          отмена
        </button>
      </div>
    </form>

    <form class="todolist__delete__form" v-show="deleteTodolistState == true">
      <button
        class="todolist__delete__btn todolist__delete__selected"
        @click="deleteTodolistSelected"
      >
        Удалить выбранные задачи
      </button>
      <button
        class="todolist__delete__btn todolist__delete__all"
        @click="deleteTodolistAll"
      >
        удалить все
      </button>
      <button
        class="todolist__delete__btn todolist__delete__cancel"
        @click="
          $event.preventDefault();
          deleteTodolistState = false;
        "
      >
        отмена
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Todolist",
  data() {
    return {
      savedTodolist: [],
      createTodolistState: false,
      deleteTodolistState: false,
      createTodolistInputValue: "",
      createTodolistColorValue: "#FFFFFF",
      todolistEmptyCheck: true,
      createTodolistInputEmptyCheck: false,
    };
  },
  methods: {
    checkTodolist(i) {
      if (this.savedTodolist[i].checked == false) {
        this.savedTodolist[i].checked = true;
        localStorage.setItem("todolist", JSON.stringify(this.savedTodolist));
      } else {
        this.savedTodolist[i].checked = false;
        localStorage.setItem("todolist", JSON.stringify(this.savedTodolist));
      }
    },
    getCreateTodolistInputValue(e) {
      this.createTodolistInputValue = e.target.value;
    },
    getCreateTodolistColorValue(e) {
      this.createTodolistColorValue = e.target.value;
    },
    setCreateTodolistState() {
      if (this.createTodolistState == false) {
        this.createTodolistState = true;
      } else {
        this.createTodolistState = false;
      }
    },
    setDeleteTodolistState() {
      if (this.deleteTodolistState == false) {
        this.deleteTodolistState = true;
      } else {
        this.deleteTodolistState = false;
      }
    },
    createTodolistSubmit(e) {
      e.preventDefault();
      let date = new Date();
      let newTodolist = {
        title: this.createTodolistInputValue,
        date: `${date.getMonth() + 1}-${date.getDate()}`,
        checked: false,
        color: this.createTodolistColorValue,
      };
      if (this.createTodolistInputValue !== "") {
        this.savedTodolist.push(newTodolist);
        this.createTodolistState = false;
        e.target.parentNode.parentNode.childNodes[1].value = "";
        localStorage.setItem("todolist", JSON.stringify(this.savedTodolist));
        this.todolistEmptyCheck = false;
        this.createTodolistInputValue = "";
      } else {
        this.createTodolistInputEmptyCheck = true;
        setTimeout(() => {
          this.createTodolistInputEmptyCheck = false;
        }, 2000);
      }
    },
    deleteTodolistAll(e) {
      e.preventDefault();
      this.savedTodolist = [];
      localStorage.removeItem("todolist");
      this.todolistEmptyCheck = true;
      this.deleteTodolistState = false;
    },
    deleteTodolistSelected(e) {
      e.preventDefault();
      let unselected = this.savedTodolist.filter(
        (a, i) => this.savedTodolist[i].checked == false
      );
      this.savedTodolist = [...unselected];
      localStorage.removeItem("todolist");
      localStorage.setItem("todolist", JSON.stringify(unselected));
      this.deleteTodolistState = false;
      if (unselected.length == 0) {
        localStorage.removeItem("todolist");
        this.todolistEmptyCheck = true;
        this.deleteTodolistState = false;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("todolist") !== null) {
      this.savedTodolist.push(...JSON.parse(localStorage.getItem("todolist")));
      this.todolistEmptyCheck = false;
    }
  },
};
</script>

<style>
li {
  list-style: none;
}
.todolist {
  margin-top: 1rem;
  color: white;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
}

.todolist__header {
  margin: 0px 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}
.todolist__content__list {
  margin: 0px 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todolist__content__checkbox {
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  transition: all 0.2s;
}
.todolist__content__checkbox:hover {
  cursor: pointer;
  border-color: rgba(255, 255, 255, 0.4);
}
.todolist__content__checkbox__checked {
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  position: relative;
  right: 1.5px;
  bottom: 1px;
}
.todolist__content__group {
  display: flex;
  margin-bottom: 1rem;
}
.todolist__btnGroup {
  display: flex;
  justify-content: space-between;
  width: 60%;
  bottom: 20%;
  position: fixed;
}
.todolist__create {
  font-size: 1.5rem;
  background: transparent;
  border-style: none;
  margin-left: 1rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s;
}
.todolist__create__inputAlert {
  background: black;
  padding: 2px 4px;
  position: absolute;
  bottom: 85px;
  border-radius: 8px;
  font-size: 0.75rem;
}

.todolist__delete {
  margin-right: 1rem;
  font-size: 1.5rem;
  background: transparent;
  border-style: none;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s;
}
.todolist__create:hover,
.todolist__delete:hover {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
}
.todolist__create__form {
  width: 30%;
  height: 180px;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background: #2e343a;
  position: fixed;
  bottom: 20%;
  left: 25%;
  display: flex;
  flex-direction: column;
}

.todolist__create__header {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.todolist__create__input {
  background: transparent;
  border-style: none;
  color: white;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.todolist__create__input:focus {
  outline: none;
}
.todolist__create__color {
  background-color: transparent;
  border-style: none;
  width: 20px;
  height: 20px;
  margin-bottom: 1rem;
}
.todolist__create__color:hover {
  cursor: pointer;
}
.todolist__create__color__label:hover {
  cursor: pointer;
}
.todolist__create__submit,
.todolist__create__cancel {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  min-width: 50px;
  width: 30%;
  margin: auto;
  padding: 4px 0;
  transition: all 0.3s;
}
.todolist__create__submit:hover,
.todolist__create__cancel:hover {
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.todolist__create__btnGroup {
  display: flex;
  justify-content: space-between;
}
.checkboxAnimation-enter-from {
  opacity: 0;
}
.checkboxAnimation-enter-active,
.checkboxAnimation-leave-active {
  transition: all 0.2s;
}
.checkboxAnimation-enter-to {
  opacity: 1;
}
.checkboxAnimation-leave-to {
  opacity: 0;
}
.todolist__delete__form {
  width: 20%;
  height: 120px;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background: #2e343a;
  position: fixed;
  bottom: 20%;
  right: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.todolist__delete__btn {
  background: transparent;
  border-style: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  min-width: 50px;
  padding: 4px 0;
  margin: 4px 0;
  transition: all 0.3s;
}
.todolist__delete__btn:hover {
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.todolist__emptyAlert {
  position: absolute;
  margin-left: 1.5rem;
}
.todolist__delete:focus,
.todolist__create:focus {
  outline: none;
}
@media screen and (max-width: 1024px) {
  .todolist__btnGroup {
    display: flex;
    justify-content: space-between;
    width: 80%;
    bottom: 20%;
    position: fixed;
  }
  .todolist__create__form {
    width: 30%;
    height: 180px;
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    background: #2e343a;
    position: fixed;
    bottom: 20%;
    left: 150px;
    display: flex;
    flex-direction: column;
  }
  .todolist__delete__form {
    width: 20%;
    height: 120px;
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    background: #2e343a;
    position: fixed;
    bottom: 20%;
    right: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>
