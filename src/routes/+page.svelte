<script>
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	function handleSubmit() {
		if (username === 'a' && password === 'b') {
			goto('/app.svelt');
		} else {
			alert('아이디 또는 비밀번호가 잘못되었습니다.');
		}
	}
</script>

<main>
	<h1>Login</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Username:
			<input type="text" bind:value={username} />
		</label>
		<label>
			Password:
			<input type="password" bind:value={password} />
		</label>
		<button type="submit">Login</button>
	</form>
</main>



<!-- src/routes/index.svelte -->


