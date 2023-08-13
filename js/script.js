{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li 
                    class="tasks__item js-task"
                >
                    <button class="tasks__button tasks__button--done js-done">
                        ${task.done ? "✓" : ""}
                    </button>
                    <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
                        ${task.content}
                    </span>
                    <button class="tasks__button tasks__button--remove js-remove">
                        🗑
                    </button>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }


    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}