<script>
	import { page } from "$app/stores";
	const post = $page.params.post
	let content = '';
  	let comments = [];

  function handleSubmit() {
    if (!content.trim()) return false; 

    comments = [...comments, { id: comments.length + 1, content }];
    
    content = '';

    return false; 
  }

	
</script>

<main>
	<h1>{post}</h1>
	<p>{post}</p>
	<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAhFBMVEX////p6ekDx1oAxVEAxE7D7M+e5bkAxlUAxleY5LXc9OOA3aIpzGsAxE/l+e6i5ruL4Kpy25kAw0hg1YlX1om/7tGt6cN42poAwkT0/fhs2JLD79Pu+/ST4q8AymDp+/LN8tv3/fnX9uRQ04Izz3LK8dkuzm+F36VU04Mby2U/0Xm168ie2eQ9AAAE80lEQVR4nO3ZUXuaShSF4SlQwaRoxKjRKAFrmmj///87zN4zQEzTnrOeZp+b9d3UAUM6bwUG674wIPfFsf8c2aDIBkU2KLJBkQ2KbFBkgyIbFNmgyAZFNiiyQZENimxQZIMiGxTZoMgGRTYoskGRDYpsUGSDIhsU2aDIBkU2KLJBkQ2KbFBkgyIbFNmgyAZFNiiyQZENimxQZIMiGxTZoMgGRTYoskGRDYpsUGSDIhsU2aDIBkU2KLJBkQ2KbFBkgyIbFNmgyAZFNiiyQZENimxQZIMiGxTZoMgGRTYoskHZsG2/+lZbHbUy+nrsd7cr3bL3b9XXTb/zRvc9xRd9/ueH0fPRGWbDdvOQdVXfdTSrZLTpd09kd/Zw5wdneZ23caeOH1p30HfFqmW3sx5vOc23BnORjNiyxJfNZTTL/SC/7Xd/K2R3cfaDaSlvXb350XzR7UiTcflu+EmtKJPV9W/+pEzZknTmR9dsxyrMO3vsRnt1ug877wQrO/4Ltg6u+mkwG2fNll/86JptkUcJf965pQyLve4UmOLkerY8VP6CLSnyvcF0rNmS7ODesW2HWWf+4vQoby7XsrORQerPbmUrXpfavT9UYKvrOlXUcmIwHXO2pGzesa31rBwmffYWud4/9JNYek5ly5/GBxa2VG4lh3T4wH561mz+sn/FdlGlPJ6M4XJWeZ+27i9jf2JzJzmdLwbTsWdLytsrtrBvLxuzptsy0xNz2r1cycvs2b8xnKSHuTbxG8dsCv/DYDrGbIUaPL1he0n13JLT0S80nHvtP3m7PIkLk3hLSEutenGRzV/lXKNHfTWYji1bcRGE+liM2Nraj7plml78M7/M/ak3hRvXDp+7dwsQ+Yzpffay2WyW+i9THgymY8uWruXDk1/qEZuehoWLnxy5gebBZS1L31IvZx+ydcuOrrD16aO/w1/Nkq2ct3Ke6qIhsMkVKfcPWnIn0JXdbSpvCzvDyjeu21JtOEmHimptMBtnzRbWZCO2WaqnYfPczPvngfj+tbwxPmeFW8LtnfbiN79ly8+PBpPxGbO5XfqW7RCu892TeDraLFfBpC7iCez7cAHiT1L542QwFc2aTdeyg0999XTUTd7fFPSiNlzDfB+yFafFQg5TTg3mIpmz9c/twjY6aWOlfxpvB7buhqqFk3S3iLnA5q+MczlQZfWlmzmbuytHbOGxPTyd68JEnqo2/eP993iQq0f5NHEjNnevK7z2l7//r2fP5k55z6YL3+LbvSaPR0nlv11q+of//qugqwVIUbsxmz5lpDuD2bj/hS08Mni2id4845eLTTVczH6Ei17aH+T3bGGNnNmsQKy+FJeVVvhSZ1LJqJtskflXWf++sx+XiT/T5pWuzobvgA9VOq4s4g9U8kTmlnKwB5PLmw3bfjrpmsYZzWX0GDcP38iudIO/WW7l5WQ663c2umWoP5J+WrfXR/vE+B9+UGSDIhsU2aDIBkU2KLJBkQ2KbFBkgyIbFNmgyAZFNiiyQZENimxQZIMiGxTZoMgGRTYoskGRDYpsUGSDIhsU2aDIBkU2KLJBkQ2KbFBkgyIbFNmgyAZFNiiyQZENimxQZIMiGxTZoMgGRTYoskGRDYpsUGSDIhsU2aDIBkU2KLJBkQ2KbFBkgyIbFNmgyAZFNiiyQZENimxQZIMiGxTZoMgGRTaojo0B/QMwCToRXJRgDwAAAABJRU5ErkJggg==" alt="">
	<p>dggh</p>
	
</main>
<h2>댓글</h2>

<form onsubmit="if (!handleSubmit()) return false;">
  <textarea bind:value="{content}"></textarea>
  <button type="submit">댓글 작성</button>
</form>

<div class="comment-list">
  <template>
    {comments.length > 0 ? comments.map(comment => (
      <div class="comment">
        <p>{comment.content}</p>
      </div>
    )) : <p>아직 작성된 댓글이 없습니다.</p>}
  </template>
</div>

<style>
  .comment-list {
    margin-top: 20px;
  }
  .comment {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>