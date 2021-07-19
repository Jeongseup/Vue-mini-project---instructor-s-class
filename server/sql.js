module.exports = {
    list: {
        query: "select * from t_person",
    },

    user: {
        query: "select * from user",
    },

    //insert into t_person set first_name='john3' ...
    createPerson: {
        query: "insert into t_person set ?",
    },

    //insert into t_person set first_name='john3' ...
    deletePerson: {
        query: "delete from t_person where id = ?",
    },

    // 첫 param이 첫 ?로,, 두 번째 param이 두번째 ?로 들어온다.
    updatePerson: {
        query: "update t_person set ? where id = ?",
    },

    insertUserEvaluation: {
        query: `insert into t_user_eval set ?`
    },

    insertQuestion: {
        query: `insert into t_questions set ?`
    },

    questionList: {
        query: `select * from t_questions where class_id=?`
    }
};
