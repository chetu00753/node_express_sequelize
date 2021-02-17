const CONFIG={}

CONFIG.app= process.env.APP || 'myapp';
CONFIG.port = process.env.PORT || '3000';

CONFIG.db_dialect=process.env.DB_DIALECT || 'mysql';
CONFIG.db_host=process.env.DB_HOST || 'localhost';
CONFIG.db_post=process.env.db_port || '3306';
CONFIG.db_name = process.env.DB_NAME || 'socialnetwork';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || '';

module.exports=CONFIG;