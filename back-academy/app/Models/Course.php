<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'price',
        'user_allowed_access_course',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function courseVideos()
    {
        return $this->hasMany(CourseVideo::class);
    }
}
