'use strict';

const login = async (event) => {
	const {
		userAccount,
		password
	} = event;
	const db = uniCloud.database();
	const collection = db.collection("userLogin");
	let result = await collection.where({
		account: db.command.eq(userAccount),
		password: db.command.eq(password)
	}).get();

	if (result.data.length === 0) {
		return {
			code: 404,
			message: '账号或密码错误'
		};
	} else {
		return {
			code: 200,
			message: '登录成功',
			data: result.data[0]._id
		};
	}
};

const register = async (event) => {
	const {
		userAccount,
		password
	} = event;
	const db = uniCloud.database();
	const collection = db.collection("userLogin");

	// 检查账号是否已存在
	let checkUser = await collection.where({
		account: db.command.eq(userAccount)
	}).get();

	if (checkUser.data.length > 0) {
		// 如果用户已存在，返回错误信息
		return {
			code: 409,
			message: '用户已存在'
		};
	}

	// 添加新用户
	let res = await collection.add({
		account: userAccount,
		password: password
	});

	// 判断注册是否成功
	if (res.id || res.insertedId) {
		return {
			code: 200,
			message: '注册成功',
			userId: res.id || res.insertedId
		};
	} else {
		return {
			code: 500,
			message: '注册失败，请稍后重试'
		};
	}
};


exports.main = async (event, context) => {
	switch (event.action) {
		case 'login':
			return await login(event);
		case 'register':
			return await register(event);
		default:
			return {
				code: 400, message: '无效的操作'
			};
	}
};