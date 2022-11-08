using System;

namespace Pizzas
{
    enum DatabaseErrors
    {
        EMAIL_EXISTS = 0,

    }

    [Serializable]
    class DatabaseError : Exception
    {
        public DatabaseErrors code;
        public DatabaseError(DatabaseErrors code)
            : base("Database error has occured -" + code)
        {
            this.code = code;
        }
    }
}
