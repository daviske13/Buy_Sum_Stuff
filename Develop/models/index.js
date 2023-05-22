const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Employee = require('./Employee');
const Role = require('./Role');
const Department = require('./Department');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Employee belongsTo Role
Employee.belongsTo(Role, {
  foreignKey: 'role_id',
});

// Employee hasMany Employee as Manager
Employee.hasMany(Employee, {
  as: 'Manager',
  foreignKey: 'manager_id',
});

// Role belongsTo Department
Role.belongsTo(Department, {
  foreignKey: 'department_id',
});

// Department hasMany Role
Department.hasMany(Role, {
  foreignKey: 'department_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  Employee,
  Role,
  Department,
};
